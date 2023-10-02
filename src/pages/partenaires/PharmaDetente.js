import React from 'react';
import Header from '../../Components/header/Header'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import image from '../../images/hotel.webp';
import { Table } from '@mui/material';

const PharmaDetente = () => {
    return (
        <div className="containe">
            <Header />
            <div style={{ position: "relative", top: "100px", width: "80%", left: "150px", }}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 500, display: { xs: 'none', sm: 'block' } }}
                            image={image}
                            alt=''
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                SenPharma Détente
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                Baobab ex-décameron
                            </Typography>
                            <Typography variant="subtitle1" paragraph sx={{ textAlign: "justify", marginTop: "30px", fontSize: "14px" }}>
                                le SenPharma vous donne rendez-vous les 21,22,23 Août sur la petite côte pour cloturer en beauté
                                cette 10ème édition. Le programe se procède coomme suit: <br />


                                <div style={{ display: "block", alignItems: "center", gridGap: "30px", marginLeft: "100px", textAlign: "justify", fontSize: "14px" }}>
                                    <p>&#x2192; <span style={{ marginLeft: "20px" }}>Football</span>  <br />
                                        &#x2192; <span style={{ marginLeft: "20px" }}>Natation</span>  <br />
                                        &#x2192; <span style={{ marginLeft: "20px" }}>Jeux de societé ...</span>  <br />
                                        &#x2192; <span style={{ marginLeft: "20px" }}>Espace de beauté (spa) </span> <br />
                                        &#x2192; <span style={{ marginLeft: "20px" }}>Diner de gala le samedi 22 juillet avec orchestre</span> <br />
                                        &#x2192;<span>Détails des Packs</span> </p>
                                </div>

                                <div>
                                    <Table sx={{ display: "flex", gridGap: "100px", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
                                        <div>
                                            <h5>Tarifs adultes</h5>
                                            <tr>
                                                <td>chb doube: <span>75.000/nuit</span></td>
                                            </tr>
                                            <tr>
                                                <td>chb Single: <span>114.000/nuit</span></td>
                                            </tr>
                                            <tr>
                                                <td>Diner de gala: <span>50.000</span></td>
                                            </tr>
                                        </div>

                                        <div>
                                            <h5>Tarifs enfants</h5>
                                            <tr>
                                                <td>0 à 3ans: <span>gratuit</span></td>
                                            </tr>
                                            <tr>
                                                <td>4 à 11ans: <span>37.500/nuit</span></td>
                                            </tr>
                                            <tr>
                                                <td>+12ans: <span>Tarifs adultes</span></td>
                                            </tr>
                                        </div>

                                    </Table>
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                    &#x2192; <span>Optionnel:</span> Transport Baobab aller retour CICAD pour 3 jours: 30.000

                                </div>

                                <div>
                                    <table border={1} style={{ borderCollapse: "collapse", marginLeft: "50px", marginTop: "20px" }}>
                                        <thead >
                                            <tr>
                                                <th style={{ padding: "12px 15px" }}>Packs</th>
                                                <th style={{ padding: "12px 15px" }}>Adulte double</th>
                                                <th style={{ padding: "12px 15px" }}>Adulte Single</th>
                                                <th style={{ padding: "12px 15px" }}>Enfants</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td style={{ padding: "12px 15px" }}>2 Nuitées</td>
                                                <td style={{ padding: "12px 15px" }}>200.000</td>
                                                <td style={{ padding: "12px 15px" }}>278.000</td>
                                                <td style={{ padding: "12px 15px" }}>75.000</td>

                                            </tr>
                                            <tr>
                                                <td style={{ padding: "12px 15px" }}>5 Nuitées</td>
                                                <td style={{ padding: "12px 15px" }}>425.000</td>
                                                <td style={{ padding: "12px 15px" }}>640.000</td>
                                                <td style={{ padding: "12px 15px" }}>187.000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </Typography>
                            <Typography component='a' href='/partenaire/detente' sx={{
                                padding: "15px 20px", background: "#FCA13A", border: "none", color: "#fff", width: "30%", marginLeft: "30px", textDecoration: "none",
                            }}>
                                Réserver une detente
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            </div>
        </div>
    );
};

export default PharmaDetente;