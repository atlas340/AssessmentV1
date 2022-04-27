FROM node:16-bullseye

RUN apt-get -y update
RUN apt-get install -y ffmpeg
RUN apt-get install -y supervisor


WORKDIR /app

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

COPY . .

RUN npm install

# RUN npm install --prefix ./client

# RUN npm run build --prefix ./client

EXPOSE 3000

# EXPOSE 3006

CMD ["/usr/bin/supervisord"]