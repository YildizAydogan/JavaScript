const searchShow = (show, cb) => { 
    fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
    .then(resp=> resp.json())
    .then(data=>{
        cb(data);
    });
}

export {searchShow}