- Run server/client with localy:

     - Run the backend server:

        ~/Assessment$ npm start                      --  It will run at http://localhost:3000


        - You can send Json object with postman and test it. Example json object:

            - Post:

                {
                "url": "https://static.videezy.com/system/resources/previews/000/000/168/original/Record.mp4",
                    "startTime":0,
                "duration":"1000"

                }

        

    - If you want to run with client:

        ~/Assessment/client$ npm start               -- It will run at http://localhost:3006

        ~/Assessment/client$ npm run build           -- Since the video file is written to the React path, we prevent it from refreshing page by performing this operation.

        ~/Assessment/client$ serve -s build -l 3006  -- Instead of npm start, you need to run the client with this command.

        

        It can be replace in package.json "start": "PORT=3006 react-scripts start" to "start": "serve -s build -l 3006" than you can use npm start again.

        If port 3006 is using it gave you another localhost:PORT

    - Notes:

        - Frontend contains 3 inputs.
        - The first is the URL input, the second is the start time of the video, and the third is the duration the video will run.
        - The "Trim Video" button trims the video to the parameters specified in the inputs.
        - Then the clipped video can be watched under the button.


- Run server/client with docker:

    - Notes:

        Docker run on client and server but video player not working.