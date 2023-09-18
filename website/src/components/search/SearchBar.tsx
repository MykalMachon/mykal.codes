import '@styles/SearchBar.css';
import { h } from 'preact';
import { useEffect, useState, useRef } from "preact/hooks";

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

// utilities
const debounce = (func: Function, timeout = 300) => {
  let timer: any;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const SearchBar = () => {
  const inputContainerRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [state, setState] = useState<SearchState>(initialState);

  const handleInputChange = (event: any) => {
    const query = event.target.value;
    if (query.trim() == '') return;
    // TODO: search for query and debounce
    setState(prevState => ({ ...prevState, query, loading: true, message: '' }));
  };


  useEffect(() => {
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
      </div>
    </dialog>
  )
}

export default SearchBar;