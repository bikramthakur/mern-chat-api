if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: '' }; // Add your remote db connection string here
} else {
    module.exports = { mongoURI: 'mongodb://localhost:27017/chat-app?readPreference=primary&appname=MongoDB%20Compass&ssl=false' }; // Add your local db connection string here
}