import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Tooltip, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > span': {
            margin: theme.spacing(2),
        },
    },
    paperGrid: {
        height: 100,
        backgroundColor: '#87CEFA'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'flex-right',
        height: 400,
        color: theme.palette.text.secondary,
    },
    container: {
        width: '100%',
        margin: 0
    },
    titleClass: {
        textAlign: 'left',
        backgroundColor: '#87CEFA',
    },
    innnerContent: {
    }
}));

export default function HomeBoxContainer() {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <Grid className={ classes.container } container spacing={ 3 }>
                <Grid item xs={ 6 } sm={ 3 }>
                    <Paper className={ classes.titleClass }>
                        <Button>API Catalog</Button>
                        <Tooltip title="Information Icon" placement="top">
                            <IconButton aria-label="info">
                                <InfoOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Paper>
                    <Paper className={ classes.paper }>
                        <ul className={ classes.innnerContent }>
                            <li><Button>Sales</Button></li>
                            <li><Button>Booking</Button></li>
                            <li><Button>Opportunity</Button></li>
                            <li><Button>GSS</Button></li>
                            <li><Button>Partner</Button></li>
                            <li><Button>Saas</Button></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={ 6 } sm={ 3 }>
                    <Paper className={ classes.titleClass }>
                        <Button>Sandbox</Button>
                        <Tooltip title="information icon" placement="top">
                            <IconButton className={ classes.iconButton } aria-label="info">
                                <InfoOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Paper>
                    <Paper className={ classes.paper }>
                        <ul>
                            <li><Button>Upload</Button></li>
                            <li><Button>Data mugging</Button></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={ 6 } sm={ 3 }>
                    <Paper className={ classes.titleClass }>
                        <Button>Place a request</Button>
                        <Tooltip title="information icon" placement="top">
                            <IconButton aria-label="info">
                                <InfoOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Paper>
                    <Paper className={ classes.paper }>
                        <ul className={ classes.innnerContent }>
                            <li><Button>Sales</Button></li>
                            <li><Button>Booking</Button></li>
                            <li><Button>Opportunity</Button></li>
                            <li><Button>GSS</Button></li>
                            <li><Button>Partner</Button></li>
                            <li><Button>Saas</Button></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={ 6 } sm={ 3 }>
                    <Paper className={ classes.titleClass }>
                        <Button>App LaunchPad</Button>
                        <Tooltip title="information icon" placement="top">
                            <IconButton className={ classes.iconButton } aria-label="info">
                                <InfoOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Paper>
                    <Paper className={ classes.paper }>
                        <ul>
                            <li><Button>Upload</Button></li>
                            <li><Button>Data mugging</Button></li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
