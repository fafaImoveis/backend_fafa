module.exports ={
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'fagundes',
    define:{
        timestamp: true,
        undescored: true
    },
};

//original: error: value too long for type character varying(255)
