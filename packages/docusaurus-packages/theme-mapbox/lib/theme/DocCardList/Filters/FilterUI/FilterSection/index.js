import PropTypes from 'prop-types';
import classnames from 'classnames';
import ControlSwitch from '@mapbox/mr-ui/control-switch';
import ControlSelect from '@mapbox/mr-ui/control-select';
import ControlText from '@mapbox/mr-ui/control-text';

export default function FilterSection({
  title,
  data,
  activeItem,
  isSwitch,
  id,
  isText,
  placeholder,
  handleInput
}) {
  const themeLabel = 'txt-s txt-bold color-darken75';
  return (
    <div
      className={classnames('mr18', {
        mt12: isSwitch,
        mb6: !isSwitch,
        w180: isText
      })}
    >
      {isText ? (
        <ControlText
          placeholder={placeholder}
          id={id}
          value={activeItem}
          onChange={handleInput}
          themeControlInput="input input--s relative wmax180"
          themeLabel={themeLabel}
          label={title}
          style={{
            top: '2px'
          }} /* make input align with select on smaller screens */
        />
      ) : null}
      {isSwitch ? (
        <ControlSwitch
          id={id}
          value={activeItem}
          label={title}
          themeLabel={`${themeLabel} ml6`}
          themeControlSwitch="switch--s-label switch--gray"
          onChange={handleInput}
        />
      ) : null}
      {!isText && !isSwitch ? (
        <ControlSelect
          id={id}
          label={title}
          value={activeItem}
          themeLabel={`${themeLabel} w70`}
          themeControlSelect="select select--s py3 pl6 select--stroke"
          onChange={handleInput}
          options={[
            {
              label: `All ${title.toLowerCase()}`,
              value: ''
            }
          ].concat(
            data.map((datum) => ({
              label: title === 'Levels' ? levels[datum].label : datum,
              value: datum
            }))
          )}
        />
      ) : null}
    </div>
  );
}

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  data: PropTypes.array,
  activeItem: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isSwitch: PropTypes.bool,
  isText: PropTypes.bool,
  placeholder: PropTypes.string
};
