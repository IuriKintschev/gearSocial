//@flow

// import modules
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// styles, components
import { Container, AddPostView } from './styles';

// types
// import { StateProps } from '../../store';
import { FormatPost } from '../Profile';
import ScrolledView from '../components/ScrolledView';
import TilePost from '../components/TilePost';

const Home = () => {
    // states
    const [feed, setFeed] = useState<FormatPost[]>(null);
    // const state = useSelector((state: StateProps) => state.auth);
    return (
        <ScrolledView setState={setFeed} urlApi="posts?_expand=user">
            <Container>
                <AddPostView />
                {feed && feed.map(t => <TilePost key={t.date} data={t} />)}
            </Container>
        </ScrolledView>
    );
};

export default Home;
