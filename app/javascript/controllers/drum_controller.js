import { Controller } from 'stimulus';
export default class extends Controller {
  static values = { sound: String }

  play() {
    const sound_path = `sounds/${this.soundValue}`
    const sound = new Audio(sound_path);
    sound.play();
  }
}
