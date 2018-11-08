import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native'
import { Card, CardItem, Icon, View } from 'native-base';
import styles from './styles';
import PropTypes from 'prop-types';


export default class DetailStore extends Component {
    render() {
        const { detail } = this.props

        return (<View>
            <Card>
                <CardItem header bordered>
                    <Text style={styles.title} >{detail.legalName}</Text>
                </CardItem>
                <CardItem bordered>
                    <Icon active name="pin" />
                    <Text>{detail.fullAddress}</Text>
                </CardItem>
                <CardItem bordered>
                    <Icon active name="at" />
                    <Text>{detail.businessEmail}</Text>
                </CardItem>
                <CardItem bordered>
                    <Icon active name="call" />
                    <Text>{detail.acnNumber}</Text>
                </CardItem>
                <CardItem footer style={styles.spaceBetween} >
                    <Text style={styles.font10} >timezone : {detail.timezone}</Text>
                    <Text style={styles.font10} >status : {detail.status}</Text>
                </CardItem>
            </Card>

            <View>
                <Text style={[styles.title, { marginHorizontal: 10 }]} >Images</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding: 5 }} >
                    {Array.isArray(detail.images) && detail.images.map((v, i) => <View key={i} style={styles.imageHorizontal} ><Text>{v.url}</Text></View>)}
                </ScrollView>
            </View>

            <Card>
                <CardItem header >
                    <Text style={styles.title} >Review</Text>
                </CardItem>
                {Array.isArray(detail.review) && detail.review.map((v, i) => (
                    <CardItem key={i} bordered style={styles.spaceBetween} >
                        <View style={{ flexDirection: 'row' }} >
                            <Icon active name="text" />
                            <Text style={{ marginLeft: 10 }} >{v.comment}</Text>
                        </View>
                        <View style={{ alignItems: 'center' }} >
                            <Icon active name="star" />
                            <Text style={{ fontWeight: '900' }} >{v.star}</Text>
                        </View>
                    </CardItem>
                ))}
            </Card>
        </View>)
    }
}

DetailStore.propTypes = {
    detail: PropTypes.object
}