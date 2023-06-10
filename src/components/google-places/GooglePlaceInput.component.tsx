import { CSSProperties, useEffect, useRef, useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress
} from 'react-places-autocomplete';
import appConfig from '../../config';
import { initPlaces } from '../../utils/google';
import Input from '../commons/input/Input.component';
import { PlaceContainer, PlaceDropDownList, PlaceListItem } from './Places.styles';
import { GeoAddress } from './types';
import { parseGeoResult } from './utils';

export interface PlaceProp {
  onSelect?: (geo?: GeoAddress) => void,
  label?: string,
  placeholder?: string,
}
export const GooglePlaceInput = ({ onSelect, label, placeholder }: PlaceProp) => {
  const [address, setAddress] = useState('');
  const [ready, setReady] = useState(false);
  const loadRef = useRef(false);

  useEffect(() => {
    if (!loadRef.current) {
      initPlaces({ config: appConfig.google.places, onLoad: () => setReady(true) });
    }
    loadRef.current = true;
  }, []);

  const handleChange = (addr: string) => {
    setAddress(addr);
  }
  const handleSelect = (addr: string) => {
    setAddress(addr);
    geocodeByAddress(addr)
      .then(async results => {
        if (onSelect) {
          onSelect(parseGeoResult(results[0]));
        }
      })
      .catch(error => console.error('Error', error));
  }
  return ready
    ? (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <PlaceContainer>
                    <Input label={label} {...getInputProps({ placeholder, className: 'location-search-input' })} />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading ...</div>}
                    </div>
                    {
                        loading
                          ? null
                          : (
                            <PlaceDropDownList>
                                {
                                    suggestions.map(suggestion => {
                                      const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                      const style: CSSProperties = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#fff', cursor: 'pointer' };

                                      return (
                                            // eslint-disable-next-line
                                            <PlaceListItem {...getSuggestionItemProps(suggestion, { className, style })}>
                                                <span>{suggestion.description}</span>
                                            </PlaceListItem>
                                      )
                                    })
                                }
                            </PlaceDropDownList>
                            )
                    }
                </PlaceContainer>
            )}
        </PlacesAutocomplete>
      )
    : null
};
