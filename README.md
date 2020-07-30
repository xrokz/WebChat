
  

# WebChat

  

Live Chatting app

  

## Installation

1. Run the following command in the command line

  

```bash

$ git clone https://github.com/xrokz/WebChat.git

```

2. Thats it..

  

## How to run ?

  

1. go to command line and run

  

  

```bash

$ cd WebChat

```

  

  

2. now you have the source-code now install the packages using

  

```bash

$ npm i

```

  

3. now you need to add your MongoDB url:
	 1. Go to [MongoDB Cloud](https://cloud.mongodb.com/) and create a account
	 2. Create Cluster and make your free database and get the link e.g `mongodb+srv://USER:PASS@CLUSTER_NAME.mongodb.net/DATABASE?retryWrites=true&w=majority`
	 3. go to [config/db.json.example](/config/db.json.example) file and paste the url there
     4. then rename the file to `db.json`
  

4. now you are done just run the app using

  

```bash

$ npm run dev

```

  

and WebChat will be running at [localhost:3000](http://localhost:3000)

  

  

5. you can also host it to public by running

  

```bash

$ npm run start

```

  

## Rooms

There is room system so you can chat with people without being interrupted by other people chating `https://webchat.app/ROOM_KEY`

  

and the `ROOM_KEY` can be anything you want

  

### Chat Logs

till now i have no chat logging so when you join a room you can't see the older messages but in the future i will add chat saver no worries..

  
  

## Contributing

You can help me getting this project done by forking this app and making your own adds and i will check and approve it..

  

## Troubleshooting

in case you saw any errors you can report them for me in the [issues](https://github.com/xRokz/WebChat/issues)

and i will be very greatfull for that..