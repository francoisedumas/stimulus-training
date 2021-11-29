import { Controller } from 'stimulus';
export default class extends Controller {

  play(e) {
    console.log("Hey")
    console.log(e.path[1])
    const audio_name = e.path[1].getAttribute('value')
    const sound = new Audio(this.data.get(audio_name));
    sound.play();
  }

  // $(".audioButton").on("click", function() {
  //   $(".audio-play")[0].currentTime = 0;
  //   return $(".audio-play")[0].play();
  // });
}
