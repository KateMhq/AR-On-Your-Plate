<View>
  <TouchableHighlight
    onPress={() => {
      this.setModalVisible(true);
    }}
  >
    <Image source={burgerPic} style={{ width: 100, height: 100 }} />
  </TouchableHighlight>
  <Modal
    animationType="slide"
    transparent={false}
    visible={this.state.modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
    }}
  >
    {" "}
    <TouchableHighlight
      onPress={() => {
        this.setModalVisible(!this.state.modalVisible);
      }}
    >
      <Text>Hide Modal</Text>
    </TouchableHighlight>
  </Modal>
</View>;
