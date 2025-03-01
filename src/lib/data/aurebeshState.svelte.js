const flipBoolean = () => aurebeshActive.value = !aurebeshActive.value

export const aurebeshActive = $state({
  value: true,
  updateValue: () => flipBoolean()
})