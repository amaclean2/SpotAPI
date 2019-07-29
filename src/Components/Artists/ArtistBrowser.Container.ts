import { connect } from 'react-redux'
import ArtistBrowser from './ArtistBrowser.Component'

const mapStateToProps = (state:any) => ({
    artists: state.artists
})

export default connect(mapStateToProps)(ArtistBrowser)