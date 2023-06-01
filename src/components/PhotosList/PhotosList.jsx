import { Grid, GridItem, CardItem } from 'components';
export const PhotosList = ({photos}) => {
  return (
    <Grid>
      {photos.map(({ id, avg_color, alt, src }) => (
        <GridItem key={id}>
          <CardItem color={avg_color}>
            <img src={src.large} alt={alt} />
          </CardItem>
        </GridItem>
      ))}
    </Grid>
  );
};
