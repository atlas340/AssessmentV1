- Run server/client with localy:

    - Installing required packages:

        ~/Assessment$ npm install  and /Assessment/client$ npm install

        - Required installation for ffmpeg:

            apt-get install -y ffmpeg

   


- Run server/client with docker:

    - Notes:

        Docker run on client and server but video player not working.

    - Build docker:

        docker build -t emin/assessment:1.0.0 .


    - Start docker script:

        - Docker start only server:

             docker run --rm -ti -p 3000:3000 --name assessment-dev emin/assessment:1.0.0

        - Docker start server and client:

            docker run --rm -ti -p 3006:3006 -p 3000:3000 --name assessment-dev emin/assessment:1.0.0