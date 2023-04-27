import React from 'react'
import { Text , View , ScrollView , StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class Book extends Component {
  render(){
     const {books} = this.props;
    return(
        <View style={styles.container}>
            <Text>도서</Text>
            <ScrollView
              keyboardShouldPersistTaps='always'
              style={styles.bookContainer}
            >
                {
                    books.map((book , index) => (
                        <View style={styles.book} key={index}>
                            <Text style={styles.name}>{book.name}</Text>
                            <Text style={styles.author}> {book.author}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
  }
  
}


const styles = StyleSheet.create({
    container : {
      flex:1,
    },
    bookContainer : {
      borderTopWidth : 1,
      borderTopColor : '#bbb',
      fontSize : 20,
      textAlign :'center'
    },
    author:{
        fontSize:15,
        color:'#888'
    }
})



//리덕스의 상태 객체를 인수로 전달받고 하나의 키를 포함한 객체를 반환 
const mapStateProps = (state) => ({
    books : state.bookReducer.books
})

export default connect(mapStateProps)(Books)