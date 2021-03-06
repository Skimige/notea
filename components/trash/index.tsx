import { FC } from 'react'
import FilterModal from 'components/filter-modal/filter-modal'
import FilterModalInput from 'components/filter-modal/filter-modal-input'
import FilterModalList from 'components/filter-modal/filter-modal-list'
import TrashItem from './trash-item'
import { NoteModel } from 'containers/note'
import { TrashState } from 'containers/trash'

const Trash: FC = () => {
  const {
    isOpen,
    closeModal,
    filterNotes,
    keyword,
    list,
  } = TrashState.useContainer()

  return (
    <FilterModal open={isOpen} onClose={closeModal}>
      <FilterModalInput
        placeholder="Search note in trash"
        doFilter={filterNotes}
        keyword={keyword}
      />
      <FilterModalList
        items={list}
        ItemComponent={(item: NoteModel) => (
          <TrashItem note={item} keyword={keyword} key={item.id} />
        )}
      />
    </FilterModal>
  )
}

export default Trash