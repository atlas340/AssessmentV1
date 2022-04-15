- Run the build command in PowerShell:


    docker build -t emin/assessment:1.0.0 .


- Start the run script


    docker run --rm -ti -p 3000:3000 --name assessment-dev emin/assessment:1.0.0