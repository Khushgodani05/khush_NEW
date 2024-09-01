const {EventEmitter} = require('node:events');

/// buy -> sms, email

const amazonEvent = new EventEmitter();

// sms
amazonEvent.once('buy', () => {
    console.log('Product bought. Sending sms');
});

// email
amazonEvent.on('buy', () => {
    console.log('Product bought. Sending email');
});

amazonEvent.on('payment_failed', () => {
    console.log('payment failed. Sending email');
});


amazonEvent.emit('buy');
amazonEvent.emit('buy');
amazonEvent.emit('buy');

amazonEvent.emit('payment_failed');