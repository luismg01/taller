export function getEvolutions(req, res) {
    res.send([{
        period: "1980",
        territory:"Huelva"
    }]);
}

export function findByperiod(req, res) {
    res.send({
        period: "1980",
        territory:"Huelva"
    });
}

