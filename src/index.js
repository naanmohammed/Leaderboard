import './styles.css';
import { refreshScores } from './modules/refreshScores.js';
import { submitScore } from './modules/submitScore.js';

document.getElementById('submitScoreButton').addEventListener('click', submitScore);
document.getElementById('refreshButton').addEventListener('click', refreshScores);
document.addEventListener('DOMContentLoaded', refreshScores);