export default function ({ success  }) {
  if (success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratulation! You guessed word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test='component-congrats' />
    )
  }
}
