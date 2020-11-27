FROM ubuntu
WORKDIR /app
RUN apt-get --yes update &&\
  apt-get install --yes curl &&\
  curl --silent --location https://deb.nodesource.com/setup_12.x | bash - &&\
  apt-get install --yes nodejs &&\
  apt-get install -y git 
ADD https://api.github.com/repos/octavian-regatun/calendar-frontend/git/refs/heads/dev version.json
RUN git clone -b dev https://github.com/octavian-regatun/calendar-frontend.git
ADD https://api.github.com/repos/octavian-regatun/calendar-backend/git/refs/heads/ version.json
RUN git clone https://github.com/octavian-regatun/calendar-backend.git
ADD backend/ calendar-backend/
ADD frontend/ calendar-frontend/
RUN cd calendar-frontend && npm install && npm run build &&\
  cd ../calendar-backend && npm install
CMD cd calendar-backend && npm run start
EXPOSE 8080
