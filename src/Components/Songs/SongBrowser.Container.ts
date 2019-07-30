import { connect } from 'react-redux'
import SongBroswer from './SongBrowser.Component'

// maps reedux to songs component

const mapStateToProps = (state:any) => ({
    songs: state.songs
})

export default connect(mapStateToProps)(SongBroswer)