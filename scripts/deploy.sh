#!/bin/sh

if [ -z "$IMAGE_NAME" ]; then
  echo "IMAGE_NAME env variable is empty. Exiting."
  exit 1
fi

if [ -z "$REACT_IMAGE_NAME" ]; then
  echo "IMAGE_NAME env variable is empty. Exiting."
  exit 1
fi

if [ -z "$GOOGLE_PROJECT_ID" ]; then
  echo "GOOGLE_PROJECT_ID env variable is empty. Exiting."
  exit 1
fi

TAG="latest"

# Authenticate to Google Container Registry
gcloud auth print-access-token | docker login -u oauth2accesstoken --password-stdin https://gcr.io

if [ "$CIRCLE_BRANCH" = "dev" ]; then
  echo "Deploying application to Staging environment"

  TAG="stag"

  # Injects firebase DB file
  echo $FIREBASE_DB_STAG | base64 -di > src/db/firebaseDB/keys/index.js

  # Injects react env variables
  echo $REACT_ENV_STAG | base64 -di > sticky-react/.env
elif [ "$CIRCLE_BRANCH" = "master" ]; then
  echo "Deploying application to Production environment"

  # Injects firebase DB file
  echo $FIREBASE_DB | base64 -di > src/db/firebaseDB/keys/index.js
  
  # Injects react env variables
  echo $REACT_ENV | base64 -di > sticky-react/.env
fi


# Builds Docker image
docker build -t ${IMAGE_NAME} .

# Tags newly created image
docker tag ${IMAGE_NAME} gcr.io/${GOOGLE_PROJECT_ID}/${IMAGE_NAME}:${CIRCLE_SHA1}
docker tag ${IMAGE_NAME} gcr.io/${GOOGLE_PROJECT_ID}/${IMAGE_NAME}:${TAG}

# Pushes image to Container Registry
docker push gcr.io/${GOOGLE_PROJECT_ID}/${IMAGE_NAME}:${CIRCLE_SHA1}
docker push gcr.io/${GOOGLE_PROJECT_ID}/${IMAGE_NAME}:${TAG}

cd sticky-react

# Builds Docker image
docker build -t ${REACT_IMAGE_NAME} .

# Tags newly created image
docker tag ${REACT_IMAGE_NAME} gcr.io/${GOOGLE_PROJECT_ID}/${REACT_IMAGE_NAME}:${CIRCLE_SHA1}
docker tag ${REACT_IMAGE_NAME} gcr.io/${GOOGLE_PROJECT_ID}/${REACT_IMAGE_NAME}:${TAG}

# Pushes image to Container Registry
docker push gcr.io/${GOOGLE_PROJECT_ID}/${REACT_IMAGE_NAME}:${CIRCLE_SHA1}
docker push gcr.io/${GOOGLE_PROJECT_ID}/${REACT_IMAGE_NAME}:${TAG}

# Deploys application
gcloud --quiet compute ssh stick-sessions --zone us-east1-b -- "cd /home/app && ./restart_service.sh gcr.io/${GOOGLE_PROJECT_ID}/${IMAGE_NAME}:${TAG}"
gcloud --quiet compute ssh stick-sessions --zone us-east1-b -- "cd /home/app && ./restart_service.sh gcr.io/${GOOGLE_PROJECT_ID}/${REACT_IMAGE_NAME}:${TAG}"
