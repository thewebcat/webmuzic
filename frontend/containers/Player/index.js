import React, { Component } from 'react';
import './style.scss'
import ddt from './ddt.mp3'
import moment from "moment/moment";

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            in_set_progress_mode: false,
            _player: ''
        };

        this.playing_id = null;
        this.is_progress_dirty = false;
        this.interval_id = setInterval(this.onUpdate.bind(this), 250);
    }

    onUpdate() {
        if (this._player && this.props.is_playing) {
            if (!this.is_progress_dirty) {
                this.setState({
                    progress: this._player.currentTime / this._player.duration
                });
            }

            if (this._player.ended && this.props.onDone) {
                this.props.onDone(this.props.src);
            }
        }
    }

    startSetProgress = (e) => {
        this.setState({
            in_set_progress_mode: true
        });
        this.setProgress(e);
    };

    stopSetProgress = (e) => {
        this.setState({
            in_set_progress_mode: false
        });
        this.setProgress(e);
    };

    setProgress = (e) => {
        if (this.state.in_set_progress_mode) {
            let progress = (e.clientX - offsetLeft(this._progress_bar)) / this._progress_bar.clientWidth;
            this.setState({
                progress: progress
            });
            this.is_progress_dirty = true;
        }
    };

    componentDidUpdate() {
        if (!this.playing_id) {
            this.playing_id = this.props.song.id;
        }

        if (this.playing_id !== this.props.song.id) {
            this._player.src = ddt; // emulate song change
            this.playing_id = null  // ++
        }
    }

    render() {
        let currentTime = 0;
        let totalTime = 0;

        if (this._player) {
            if (this._player.paused && !this._player.ended) {
                if (this.props.is_playing) {
                    this._player.play()
                }
            } else if (!this.props.is_playing) {
                this._player.pause()
            }

            if (this.is_progress_dirty) {
                this.is_progress_dirty = false;

                this._player.currentTime = this._player.duration * this.state.progress;
            }

            currentTime = this._player.currentTime;
            totalTime = this._player.duration;
        }

        const playerClsName = {
            "fa": true,
            "fa-play": !this.props.is_playing,
            "fa-pause": this.props.is_playing
        };

        return (
            <div className="player">
                <div className="controls">
                    <a onClick={this.props.onPrev}><i className="fa fa-chevron-left" aria-hidden="true">&nbsp;</i></a>
                    <a onClick={this.props.togglePlay}>
                        <i className={classnames(playerClsName)} aria-hidden="true">&nbsp;</i>
                    </a>
                    <a onClick={this.props.onNext}><i className="fa fa-chevron-right" aria-hidden="true">&nbsp;</i></a>
                </div>
                <div className="track_info">
                    <div className="title">{this.props.song.name}</div>
                    <div className="artist">{this.props.artist}</div>
                </div>
                <div
                    onMouseDown={this.startSetProgress}
                    onMouseMove={this.setProgress}
                    onMouseLeave={this.stopSetProgress}
                    onMouseUp={this.stopSetProgress}
                    className="progress"
                >
                    <div className="time">
                        {moment.duration(currentTime, "seconds").format("mm:ss")}
                    </div>
                    <div ref={(ref) => this._progress_bar = ref} className="bar">
                        <div style={{width: (this.state.progress * 100) + '%'}}>&nbsp;</div>
                    </div>
                    <div className="time time__total">
                        {moment.duration(totalTime, "seconds").format("mm:ss")}
                    </div>
                </div>
                <audio ref={(ref) => this._player = ref} autoPlay={this.props.is_playing}>
                    <source src={ddt}/>
                    <source/>
                </audio>
            </div>
        );
    }
}

function classnames(obj) {
    let css = [];
    Object.keys(obj).forEach((key) => {
        if (obj[key]) {
            css.push(key);
        }
    });
    return css.join(' ');
}

function offsetLeft(el) {
    let left = 0;
    while (el && el !== document) {
        left += el.offsetLeft;
        el = el.offsetParent;
    }
    return left;
}

export default Player;