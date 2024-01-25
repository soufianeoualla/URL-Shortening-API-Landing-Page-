
const ShortenLink = (props) => {
  const{ link ,error ,handleChange ,handleSubmit} = props

  return (
    <form
    
      onClick={handleSubmit}
      className='shorten-link grid gap-4 rounded-xl p-16  relative sm:grid-cols-1 sm:p-6'
    >
      <label htmlFor='' className="grid gap-2">
        <input
          className={`p-5 rounded-lg w-full h-16 ${error ? 'input-error' :null}`}
          type='url'
          name="link"
          placeholder='Shorten a link here...'
          value={link}
          onChange={handleChange}
        />
        {error ? (
          <p className='error absolute italic sm:static'>{error} </p>
        ) : null}
      </label>

      <button
      type="submit" className='primary-btn h-16 text-xl font-bold flex justify-center items-center '>Shorten It!</button>
    </form>
  );
};

export default ShortenLink;
