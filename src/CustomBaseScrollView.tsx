import * as React from 'react';
import {ScrollView, Platform} from 'react-native';
import { BaseScrollView } from 'recyclerlistview';

const scrollProps = {
    showsHorizontalScrollIndicator:false,
    pagingEnabled:true,
    disableIntervalMomentum:true,
    decelerationRate:'fast'       
}
export default class CustomBaseScrollView extends BaseScrollView {
    private readonly scrollViewRef: React.RefObject<ScrollView>;
    constructor(props) {
        super(props);
        this.scrollViewRef = React.createRef();
        this.scrollTo = this.scrollTo.bind(this);
    }


    scrollTo(...args) {
        if (this.scrollViewRef.current) {
            this.scrollViewRef.current.scrollTo(...args);
        }
    }

    render() {
        return (
            Platform.OS == 'ios' ?
            <ScrollView
                ref={this.scrollViewRef}
                {...this.props}
                snapToAlignment={'center'}
                {...scrollProps}
            >
                {this.props.children}
            </ScrollView>
            :
            <ScrollView
                ref={this.scrollViewRef}
                {...this.props}          
                {...scrollProps}
            >
                {this.props.children}
                </ScrollView>
        );
    }
}
