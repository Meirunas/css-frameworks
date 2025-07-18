import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function MUIPlayground() {
  return (
    <Box
      sx={{
        minHeight: '100vh',            
        display: 'flex',               
        alignItems: 'flex-start',          
        justifyContent: 'center',      

      }}
    >
      <Card variant="outlined" sx={{ maxWidth: 360, width: '100%' }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5">
              Toothbrush
            </Typography>
            <Typography gutterBottom variant="h6">
              $4.50
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down
            the hall.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Select type
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip color="primary" label="Soft" size="small" />
            <Chip label="Medium" size="small" />
            <Chip label="Hard" size="small" />
          </Stack>
        </Box>
      </Card>
    </Box>
  );
}
