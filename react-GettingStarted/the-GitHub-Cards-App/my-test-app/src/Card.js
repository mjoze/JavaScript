import React from 'react';

const Cardlist = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile} />)}
    </div>
)

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt="training photo" width={50} />
                <div className="info">
                    <div className="profile">
                        {profile.name}
                    </div>
                    <div className="company">
                        {profile.company}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cardlist;