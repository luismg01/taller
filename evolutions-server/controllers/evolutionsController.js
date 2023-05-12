import * as service from '../services/evolutionsService.js';

export function getEvolutions(req, res) {
    service.getEvolutions(req, res);
}

export function findByperiod(req, res) {
    service.findByperiod(req, res);
}

