import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

class Cargando extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  /*componentDidMount() {
    const navegar=this.props.navigation;
      this.setState({visible: true})
      setTimeout(() => {
        navegar.navigate('Login');
        this.setState({visible: false})
      },2000);
  }*/
  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 30000);
  }

  render() {
    const { visible } = this.state;
    return (
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
      />
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});

export default Cargando;