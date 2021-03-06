const Mam = require('@iota/mam');
const { asciiToTrytes, trytesToAscii } = require('@iota/converter');

const mode = 'public';
const provider = 'https://nodes.devnet.iota.org';

// const mamExplorerLink = `https://mam-explorer.firebaseapp.com/?provider=${encodeURIComponent(provider)}&mode=${mode}&root=`;

let mamState = Mam.init(provider);

const publish = async packet => {
    // Create MAM message as a string of trytes
    const trytes = asciiToTrytes(JSON.stringify(packet));
    const message = Mam.create(mamState, trytes);

    // Save your new mamState
    mamState = message.state;
    // Attach the message to the Tangle
    await Mam.attach(message.payload, message.address, 3, 9)

    console.log('Published', packet);
    console.log('Root = ', message.root, '\n');
    return message.root
}

const publishAll = async (func) => {
    var root=null;
    var initial=true
    while(true)
    {

        var msg = func()
        if(initial)
        {
            root = await publish({
                message: msg,
                timestamp: (new Date()).toLocaleString()
              })
              console.log("Root is ", root)

        }
        else{
            await publish({
                message: msg,
                timestamp: (new Date()).toLocaleString()
              })
        }
        initial=false

    }

    console.log("Root is ", root)

    return root
  }

  function getMsg(){
    return "Hello from Function"
  }

  async function pAll(){
    // while(true){
      await publishAll(getMsg)
    // }

  }
pAll()