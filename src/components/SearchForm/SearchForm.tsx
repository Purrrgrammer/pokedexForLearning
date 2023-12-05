import { generationList, typesList, sortList } from "@/util/optionList";
import { useSearchForm } from "@/components/SearchForm/SearchForm.hook";
export function SearchForm() {
  const { fieldGeneration, fieldTypes, fieldSort, fieldKeyword } =
    useSearchForm();

  return (
    <form className="grid grid-cols-4 gap-x-[20px] content-center justify-center items-center		">
      <div>
        {/* <label htmlFor="generation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generation</label> */}
        <select
          defaultValue={0}
          {...fieldGeneration}
          id="generation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Generation</option>
          {generationList.map((generation, index) => (
            <option key={`generation-key-${index}`} value={index}>
              {generation.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label> */}
        <select
          {...fieldTypes}
          id="type"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Type</option>
          {typesList.map((type, index) => (
            <option key={`types-key-${index}`} value={index}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort</label> */}
        <select
          {...fieldSort}
          id="sort"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Sort</option>
          {sortList.map((sort, index) => (
            <option key={`types-key-${index}`} value={index}>
              {sort}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* <label htmlFor="generation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label> */}
        <input
          {...fieldKeyword}
          placeholder="Search"
          id="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </form>
  );
}

export default SearchForm;
