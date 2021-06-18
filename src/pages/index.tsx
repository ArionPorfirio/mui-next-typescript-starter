import { Container, Box, Typography } from '@material-ui/core'
import { Link } from '@components/Link'

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Everything working!
        </Typography>
        <Link
          href={{ pathname: '/', query: { hello: 'world' } }}
          color="secondary"
        >
          Go Somewhere
        </Link>
      </Box>
    </Container>
  )
}
