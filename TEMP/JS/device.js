init_step_catalog();
function init_step_catalog() {
  if ((device.mobile()) && (device.portrait())) {
    obj.step = 1;
  }
}