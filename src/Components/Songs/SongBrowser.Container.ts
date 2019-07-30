import { connect } from 'react-redux'
import SongBroswer from './SongBrowser.Component'

const mapStateToProps = (state:any) => ({
    songs: state.songs
})

export default connect(mapStateToProps)(SongBroswer)