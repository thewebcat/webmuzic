import React, { Component } from 'react';
import './style.scss'
import ddt from './ddt.mp3'
import moment from "moment/moment";

class Player extends Component {
    constructor() {
        super();

        this.state = {
            is_playing: false,
            progress: 0,
            in_set_progress_mode: false,
            _player: ''
        };

        this.is_progress_dirty = false;
        this.interval_id = setInterval(this.onUpdate.bind(this), 250);
    }

    onUpdate() {
        if (this._player) {
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

    togglePlay = () => {
        this.setState({is_playing: !this.state.is_playing});
    };

    render() {
        let currentTime = 0;
        let totalTime = 0;

        if (this._player) {
            if (this._player.paused && !this._player.ended) {
                if (this.state.is_playing) {
                    this._player.play()
                }
            } else {
                this._player.pause()
            }

            currentTime = this._player.currentTime;
            totalTime = this._player.duration;
        }
        // let currentTime = 0;
        // let totalTime = 0;
        //
        // if (this._player) {
        //     if (this._player.currentSrc !== this.props.src) {
        //         this._player.src = this.props.src;
        //     }
        //
        //     if (this._player.paused && !this._player.ended) {
        //         if (this.state.is_playing) {
        //             this._player.play();
        //         }
        //     }
        //     else if (!this.state.is_playing) {
        //         this._player.pause();
        //     }
        //
        //     if (this.is_progress_dirty) {
        //         this.is_progress_dirty = false;
        //
        //         this._player.currentTime = this._player.duration * this.state.progress;
        //     }
        //
        //     currentTime = this._player.currentTime;
        //     totalTime = this._player.duration;
        // }

        let playerClsName = {
            "fa": true,
            "fa-play": !this.state.is_playing,
            "fa-pause": this.state.is_playing
        };

        return (
            <div className="player">
                <div className="controls">
                    <a ><i className="fa fa-chevron-left" aria-hidden="true">&nbsp;</i></a>
                    <a onClick={this.togglePlay}>
                        <i className={classnames(playerClsName)} aria-hidden="true">&nbsp;</i>
                    </a>
                    <a ><i className="fa fa-chevron-right" aria-hidden="true">&nbsp;</i></a>
                </div>
                <div
                    className="progress"
                >
                    <div ref={(ref) => this._progress_bar = ref} className="bar">
                        <div style={{width: (this.state.progress * 100) + '%'}}>&nbsp;</div>
                    </div>
                </div>
                <div className="time">
                    {moment.duration(currentTime, "seconds").format("h[h] mm[m] ss[s]")} / {moment.duration(totalTime, "seconds").format("h[h] mm[m] ss[s]")}
                </div>
                <audio ref={(ref) => this._player = ref} autoPlay={this.state.is_playing}>
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

export default Player;