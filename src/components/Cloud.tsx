import './Cloud.css';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Grid,
  Slide,
  Typography,
} from '@material-ui/core';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';
import React from 'react';
import useIntersect from '../utils/useIntersectHook';

export default function Cloud() {
  const projectSection = React.useRef(null);
  const [projectVisible] = useIntersect(projectSection);

  const slideTimeout = 2000;
  return (
    <div ref={projectSection}>
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Slide direction="right" in={projectVisible} mountOnEnter unmountOnExit timeout={slideTimeout}>
            <Card>
              <CardMedia className="project-media" image="../assets/images/me.jpg" title="Project One" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together
                  with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="open project">
                  <OpenInNewIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
        <Grid item xs={4}>
          <Slide direction="up" in={projectVisible} mountOnEnter unmountOnExit timeout={slideTimeout}>
            <Card>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together
                  with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="open project">
                  <OpenInNewIcon />
                </IconButton>
              </CardActions>
              <CardMedia className="project-media" image="../assets/images/me.jpg" title="Project Two" />
            </Card>
          </Slide>
        </Grid>
        <Grid item xs={4}>
          <Slide direction="down" in={projectVisible} mountOnEnter unmountOnExit timeout={slideTimeout}>
            <Card>
              <CardMedia className="project-media" image="../assets/images/me.jpg" title="Project Three" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together
                  with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="open project">
                  <OpenInNewIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}
