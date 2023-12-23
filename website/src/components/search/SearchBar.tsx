import '@styles/SearchBar.css';
import { useEffect, useState, useRef } from "react";
import { useDebounce } from '@uidotdev/usehooks'

// import this to allow searching of pages


type SearchState = {
  query: string;
  results: Array<any>; // TODO: make this more specific
  loading: boolean;
  message: string;
  active: boolean;
}

const initialState: SearchState = {
  query: '',
  results: [],
  loading: false,
  message: '',
  active: false,
};

const SearchBar = () => {
  const inputContainerRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [state, setState] = useState<SearchState>(initialState);
  const [pagefind, setPagefind] = useState<any>(null);

  const debounceState = useDebounce<SearchState>(state, 500);

  const handleInputChange = (event: any) => {
    const query = event.target.value;
    setState(prevState => ({ ...prevState, query, loading: true, message: '' }));
  };

  const searchSite = async () => {
    setState(prevState => ({ ...prevState, loading: true }));
    try {
      const search = await pagefind.search(debounceState.query);
      const results = await Promise.all(search.results.map((res: Response) => res.data()))
      setState(prevState => ({ ...prevState, results, loading: false }));
    } catch (err) {
      console.error(`Error searching site: ${err}`);
      setState(prevState => ({ ...prevState, loading: false, message: 'Error searching site' }));
    }
  }

  useEffect(() => {
    const pagefindModule = import('https://mykal.codes/pagefind/pagefind.js?url');
    pagefindModule.then((module) => setPagefind(module));
    // setup
    const ctrlKListener = document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        setState(prevState => ({ ...prevState, query: '', active: prevState.active ? false : true }));
        setTimeout(() => {
          if (inputRef.current != null) {
            inputRef.current.focus();
          }
        }, 1)
      }
    });
    const escListener = document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setState(prevState => ({ ...prevState, active: false, query: '' }));
      }
    });
    const clickListener = document.addEventListener('click', (event) => {
      if (!inputContainerRef.current) return;
      if (event.target && !inputContainerRef.current.contains(event.target)) {
        setState(prevState => ({ ...prevState, active: false, query: '' }));
      }
    });

    // cleanup
    return () => {
      document.removeEventListener('keydown', ctrlKListener);
      document.removeEventListener('keydown', escListener);
      document.removeEventListener('click', clickListener);
    }
  }, [])

  useEffect(() => {
    if (!state.active) {
      console.log('close search modal');
      inputContainerRef.current?.close();
    } else {
      console.log('open search modal')
      inputContainerRef.current?.showModal();
    }
  }, [state.active])

  useEffect(() => {
    if (debounceState.query.trim() == '') return;
    console.log('fetching results for', debounceState.query);
    searchSite();
  }, [debounceState.query])

  return (
    <dialog className="searchBar" ref={inputContainerRef}>
      <div className="searchBar__container">
        <div className="searchBar__top">
          <input
            type="text"
            className="searchBar__input"
            placeholder="Search the site..."
            value={state.query}
            onInput={handleInputChange}
            ref={inputRef}
          />
          <p>You can press ctrl+k or esc to close the search dialog.</p>
        </div>
        <div className="searchBar__results">
          {state.results.map((result, index) => (
            <a href={result.url} className="searchBar__result" key={index}>
              <p className="searchBar__result__title">{result.meta.title}</p>
              <p dangerouslySetInnerHTML={{ __html: result.excerpt }} />
            </a>
          ))}
        </div>
      </div>
    </dialog>
  )
}

export default SearchBar;