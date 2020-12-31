import { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { useCopyToClipboard } from 'react-use';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  buttonText: {
    color: theme.palette.info.main,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
  },
  iconText: {
    fontSize: 'medium',
    marginRight: theme.spacing(1),
  },
}));

const CopyToClipBoardText = ({ text }) => {
  const classes = useStyles();
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState('copy');

  const getToolTipsTitle = () => {
    switch (statusCopy) {
      case 'copy':
        return 'Copy';
      case 'copied':
        return 'Copied';
      default:
        return '';
    }
  };

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy('copied');
  }, [copyToClipboard, text]);

  const handleClickAway = useCallback(() => {
    setStatusCopy('copy');
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Tooltip title={getToolTipsTitle()} arrow placement="top">
        <Button
          className={classes.buttonText}
          type="button"
          onClick={onClickCopy}
        >
          <FileCopyOutlinedIcon className={classes.iconText} />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClipBoardText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyToClipBoardText;
