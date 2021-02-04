const pool = require('../pool');
exports.getRegistro = async (req,res) =>{
    try{
        pool.query('SELECT * FROM cachipun',(err,response)=>{
            if(err){
                console.log(err);
            }
            if(response){
                res.json(response);
            }
            res.end();
        })
    }catch(error){
        return res.json(error);
    }
}
exports.getById = async (req,res) =>{
    let id = req.params.ID;
    try {
        pool.query(`SELECT COUNT(1) as TOTAL,
                        case a.movimiento
                            when 1 then 'piedra'
                            when 2 then 'papel'
                            when 2 then 'tijera'
                            when 2 then 'cordel'
                            when 2 then 'perro'
                        end as movimiento,b.nombre
                    FROM movimientos a
                        LEFT JOIN cachipun b
                            ON a.idUser = b.idHash  
                    WHERE b.playerNum = '` + id  +`'
                    GROUP BY a.movimiento
                    ORDER BY TOTAL
                    LIMIT 1`,(err,response)=>{
            if(err){
                console.log(err);
            }
            if(response){
                res.json(response);
            }
            res.end();
        })
    } catch (error) {
        
    }
}

exports.crearRegistro = async (req,res) =>{
    let record = req.body;
    let created = new Date();
    try {
        pool.query("INSERT INTO cachipun (idHash,nombre,fechaHora,idEncuesta,playerNum) VALUES ('" + record.idUser +"','" + record.nombre + "','"+ created.toISOString().slice(0,19) +"','"+ record.idEncuesta+"'," + record.playerNum +")"
        ,(err,response)=>{
            if(err){
                console.log(err);
            }
            if(response){
                console.log('inserto');
            }
            res.end();
        })
    } catch (error) {
        
    }
}
exports.crearMovimiento = async (req,res) =>{
    let record = req.body;
    try {
        pool.query("INSERT INTO movimientos (idEncuesta,idUser,movimiento) VALUES ('" + record.idEncuesta + "','" + record.idUser +"','"+record.movimiento +"')"
        ,(err,response)=>{
            if(err){
                console.log(err);
            }
            if(response){
                console.log('inserto');
            }
            res.end();
        })
    } catch (error) {
        
    }
}
exports.updateRegistro = async (req,res) =>{
    let id          = req.params.ID;
    let idJuego     = req.params.IDGAME;
    let registro    = req.body;
    let ganador     = 0;
    if(idJuego == 1){
        ganador = registro.ganadorJuego;
    }else if(idJuego == 2){
        ganador = registro.ganadorJuego;
    }else if(idJuego == 3){
        ganador = registro.ganadorJuego;
    }
    try { 
        pool.query("UPDATE cachipun SET ganadorJuego" + idJuego + " = " + ganador +" WHERE id='" + id+"'"
        ,(err,response)=>{
            if(err){
                console.log(err);
            }
            if(response){
                console.log('actualizó');
            }
            res.end();
        });
    } catch (error) {
        
    }
}