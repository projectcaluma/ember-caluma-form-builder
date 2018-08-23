import Component from "@ember/component";
import layout from "../../templates/components/cfb-form-editor/question-list";

export default Component.extend({
  layout,
  tagName: "ul",
  classNames: ["uk-list", "uk-list-divider"]
});
