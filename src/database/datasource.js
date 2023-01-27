const datasource = [
    {
        user: process.env.NSIKATIALEADER_DB_C0_USERNAME,
        password: process.env.NSIKATIALEADER_DB_C0_PASSWORD
    },
    {
        user: process.env.NSIKATIALEADER_DB_C1_USERNAME,
        password: process.env.NSIKATIALEADER_DB_C1_PASSWORD
    },
    {
        user: process.env.NSIKATIALEADER_DB_C2_USERNAME,
        password: process.env.NSIKATIALEADER_DB_C2_PASSWORD
    },
    {
        user: process.env.NSIKATIALEADER_DB_C3_USERNAME,
        password: process.env.NSIKATIALEADER_DB_C3_PASSWORD
    }
]

module.exports = datasource;