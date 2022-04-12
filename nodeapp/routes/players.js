var express = require('express');
const flash = require('express-flash');
var router = express.Router();
var db = require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/players-list', (req, res, next) => {
    db.query('SELECT * FROM players_list ORDER BY goals DESC;', (err, data, fields) => {
    if (err) throw err; 
    res.render('players-list', { title: 'Players List', userData: data});
  });
});

//this script update database table players in column goals adding +1
router.get('/add-goal', (req, res, next) => {
  db.query('UPDATE players_list SET goals = goals + 1 WHERE id = ?', req.query.id, (err, data) => {
    res.redirect('players-list');
  });
});

router.get('/remove-goal', (req, res, next) => {
  db.query('UPDATE players_list SET goals = goals - 1 WHERE id = ?', req.query.id, (err, data) => {
    res.redirect('players-list');
  });
});

router.get('/add-assist', (req, res, next) => {
  db.query('UPDATE players_list SET assist = assist + 1 WHERE id = ?', req.query.id, (err, data) => {
    res.redirect('players-list');
  });
});

router.get('/remove-assist', (req, res, next) => {
  db.query('UPDATE players_list SET assist = assist - 1 WHERE id = ?', req.query.id, (err, data) => {
    res.redirect('players-list');
  });
});

router.get('/add-MOTM', (req, res, next) => {
  db.query('UPDATE players_list SET motm = motm + 1 WHERE id = ?', req.query.id, (err, data) => {
    res.redirect('players-list');
  });
});

router.get('/remove-MOTM', (req, res, next) => {
  db.query('UPDATE players_list SET motm = motm - 1 WHERE id = ?', req.query.id, (err, data) => {
    res.redirect('players-list');
  });
});

router.get('/delete', (req, res, next) => {
  if(res.statusCode == 200){
    db.query('DELETE FROM players_list WHERE id = ?', req.query.id, (err,data) => {
      res.redirect('players-list');  
    });
  }else{
    
  }
});

router.get('/match', (req, res, next) => {
  db.query('SELECT * FROM fixtures WHERE id_game = ?', req.query.id, (err, result) => {
    res.render('match', {game: result[0]});
  });
});

router.post('/match', (req, res, next) => {
  var param = [
    req.body,
    req.query.id
  ];
  
  db.query('UPDATE fixtures SET ? WHERE id_game = ?', param, (err, result) => {
    res.redirect('save');
  });
});

router.get('/save', (req, res, next) => {
  res.redirect('fixtures');
});

router.get('/edit', (req, res, next) => {
  db.query('SELECT * FROM players_list WHERE id = ?', req.query.id, (err, result) => {
    res.render('edit', { player: result[0] });
  });
});

router.post('/edit', (req, res, next) => {
  var param = [
    req.body,
    req.query.id
  ];
  db.query('UPDATE players_list SET ? WHERE id = ?', param, (err, result) => {
    res.redirect('return');
  });
});

router.get('/return', (req, res, next) => {
  res.redirect('players-list');
});

router.get('/insert', (req, res, next) => {
  res.render('insert', { success: req.flash('success'), fail: req.flash('fail')});
});

router.post('/insert', (req, res, next) => {
if(res.statusCode == 200 && req.body.name, req.body.position, req.body.county, req.body.team != ''){
  db.query('INSERT INTO players_list SET ?', req.body, (err, result) => {
    console.log("Inserimento avvenuto con successo!");
    req.flash("success","Inserimento avvenuto con successo!");
    res.redirect('insert');
  });
}else{
  console.log("Inserimento non effettuato!");
  req.flash("fail","Impossibile effettuare l'inserimento!");
  res.redirect('insert');
}
});

router.get('/fixtures', (req, res, next) => {
  db.query('SELECT * FROM fixtures;', (err, data, fields) => {
  if (err) throw err; 
  res.render('fixtures', { title: 'Fixtures', fixtures: data});
});
});

router.get('/league-table', (req, res, next) => {
  db.query('SELECT * FROM league_table ORDER BY points DESC;', (err, data, fields) => {
  if (err) throw err; 
  res.render('league-table', { title: 'League Table', leagueTable: data});
  });
});

router.get('/add-win', (req, res, next) => {
  db.query('UPDATE league_table SET points = points + 3 WHERE id = ?', req.query.id, (err, data) => {
    res.redirect('league-table');
  });
});

router.get('/add-draw', (req, res, next) => {
  db.query('UPDATE league_table SET points = points + 1 WHERE id = ?', req.query.id, (err, data) => {
    res.redirect('league-table');
  });
});

router.get('/test', (req, res, next) => {
  db.query('CALL team_points("Werder Brema");', (err, data, fields) => {
  if (err) throw err; 
  res.render('test', { title: 'test', data: data});
  });
});

module.exports = router;
