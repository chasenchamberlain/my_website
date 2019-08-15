import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import heroImage from '../images/horseshoe-bend.jpg'

const useStyles = makeStyles(theme => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(' + heroImage + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}))

export default function Hero(props) {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Paper className={classes.mainFeaturedPost}>
                <div className={classes.mainFeaturedPostContent}>
                    <Typography component = 'h1' variant = 'h3' color = 'inherit' gutterBottom>
                        Chasen Chamberlain
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                    Please hire me because I am a hard worker, thrive in a team environment, and a funny guy.
                  </Typography>
                </div>

            </Paper>
        </React.Fragment>
    )
}