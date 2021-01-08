export const storage = {
  saveValue: (value: number) => localStorage.setItem('value', value.toString()),
  getValue: () => localStorage.getItem('value'),
}
