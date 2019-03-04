var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#PowerSystems.jl-1",
    "page": "Home",
    "title": "PowerSystems.jl",
    "category": "section",
    "text": "PowerSystems.jl is a Julia package for doing Power Systems Modeling.For more detailed documentation of each object in the library, see the API/PowerSystems page.Some examples of usage can be found in the examples directory using IJulia."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "This package is not yet registered. Until it is, things may change. It is perfectly usable but should not be considered stable.You can install it by typingjulia> Pkg.clone(\"https://github.com/NREL/PowerSystems.jl.git\")"
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "Once installed, the PowerSystems package can by used by typingusing PowerSystems"
},

{
    "location": "api/PowerSystems/#",
    "page": "PowerSystems",
    "title": "PowerSystems",
    "category": "page",
    "text": ""
},

{
    "location": "api/PowerSystems/#PowerSystems-1",
    "page": "PowerSystems",
    "title": "PowerSystems",
    "category": "section",
    "text": "CurrentModule = PowerSystems\nDocTestSetup  = quote\n    using PowerSystems\nendAPI documentationPages = [\"PowerSystems.md\"]"
},

{
    "location": "api/PowerSystems/#Index-1",
    "page": "PowerSystems",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"PowerSystems.md\"]"
},

{
    "location": "api/PowerSystems/#PowerSystems.PowerSystems",
    "page": "PowerSystems",
    "title": "PowerSystems.PowerSystems",
    "category": "module",
    "text": "Module for constructing self-contained power system objects.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.Bus",
    "page": "PowerSystems",
    "title": "PowerSystems.Bus",
    "category": "type",
    "text": "Bus\n\nA power-system bus. \n\nConstructor\n\nBus(number, name, bustype, angle, voltage, voltagelimits, basevoltage)\n\nArguments\n\nnumber::Int64 : number associated with the bus\nname::String : the name of the bus\nbustype::String : type of bus, [PV, PQ, SF]; may be nothing\nangle::Float64 : angle of the bus in degrees; may be nothing\nvoltage::Float64 : voltage as a multiple of basevoltage; may be nothing\nvoltagelimits::NamedTuple(min::Float64, max::Float64) : limits on the voltage variation as multiples of basevoltage; may be nothing\nbasevoltage::Float64 : the base voltage in kV; may be nothing\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.EconRenewable",
    "page": "PowerSystems",
    "title": "PowerSystems.EconRenewable",
    "category": "type",
    "text": "\" Data Structure for the economical parameters of renewable generation technologies.     The data structure can be called calling all the fields directly or using named fields.     All the limits are defined by NamedTuples and some fields can take nothing\n\n## Examples\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.EconThermal",
    "page": "PowerSystems",
    "title": "PowerSystems.EconThermal",
    "category": "type",
    "text": "\" Data Structure for the economical parameters of thermal generation technologies.     The data structure can be called calling all the fields directly or using named fields.     All the limits are defined by NamedTuples and some fields can take nothing\n\n## Examples\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.MultiConductorMatrix",
    "page": "PowerSystems",
    "title": "PowerSystems.MultiConductorMatrix",
    "category": "type",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.MultiConductorVector",
    "page": "PowerSystems",
    "title": "PowerSystems.MultiConductorVector",
    "category": "type",
    "text": "a data structure for working with multiconductor datasets\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.PowerSystem",
    "page": "PowerSystems",
    "title": "PowerSystems.PowerSystem",
    "category": "type",
    "text": "PowerSystem\n\nA power system defined by fields for buses, generators, loads, branches, and overall system parameters.\n\nConstructor\n\nPowerSystem(buses, generators, loads, branches, storage, basepower; kwargs...)\nPowerSystem(ps_dict; kwargs...)\nPowerSystem(file, ts_folder; kwargs...)\n\nArguments\n\nbuses::Array{Bus,1} : an array of buses\ngenerators::Array{Generator,1} : an array of generators of (possibly) different types\nloads::Array{ElectricLoad,1} : an array of load specifications that includes timing of the loads\nbranches::Array{Branch,1} : an array of branches; may be nothing\nstorage::Array{Storage,1} : an array of storage devices; may be nothing\nbasepower::Float64 : the base power of the system (DOCTODO: is this true? what are the units of base power?)\nps_dict::Dict{String,Any} : the dictionary object containing PowerSystem data\nfile::String, ts_folder::String : the filename and foldername that contain the PowerSystem data\n\nKeyword arguments\n\nrunchecks::Bool : run available checks on input fields\n\nDOCTODO: any other keyword arguments?\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ProportionalReserve",
    "page": "PowerSystems",
    "title": "PowerSystems.ProportionalReserve",
    "category": "type",
    "text": "ProportionalReserve(name::String,         contributingdevices::PowerSystemDevice,         timeframe::Float64,         requirement::Dict{Any,Dict{Int,TimeSeries.TimeArray}})\n\nData Structure for a proportional reserve product for system simulations. The data structure can be called calling all the fields directly or using named fields. name - description contributingdevices - devices from which the product can be procured timeframe - the relative saturation timeframe requirement - the required quantity of the product\n\nExamples\n\n```jldoctest\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.StaticReserve",
    "page": "PowerSystems",
    "title": "PowerSystems.StaticReserve",
    "category": "type",
    "text": "StaticReserve(name::String,         contributingdevices::PowerSystemDevice,         timeframe::Float64,         requirement::Float64})\n\nData Structure for the procurement products for system simulations. The data structure can be called calling all the fields directly or using named fields. name - description contributingdevices - devices from which the product can be procured timeframe - the relative saturation timeframe requirement - the required quantity of the product\n\nExamples\n\n```jldoctest\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.TechThermal",
    "page": "PowerSystems",
    "title": "PowerSystems.TechThermal",
    "category": "type",
    "text": "TechThermal(activepower::Float64,\n        activepowerlimits::NamedTuple{(:min, :max),Tuple{Float64,Float64}},\n        reactivepower::Union{Float64,Nothing},\n        reactivepowerlimits::Union{(min::Float64,max::Float64),Nothing},\n        ramplimits::Union{NamedTuple{(:up, :down),Tuple{Float64,Float64}},Nothing},\n        timelimits::Union{NamedTuple{(:min, :max),Tuple{Float64,Float64}},Nothing})\n\nData Structure for the economical parameters of thermal generation technologies.     The data structure can be called calling all the fields directly or using named fields.     Two examples [DOCTODO only one example exists below] are provided one with minimal data definition and a more comprenhensive one\n\n# Examples\n\n```jldoctest\n\njulia> Tech = TechThermal(activepower = 100.0, activepowerlimits = (min = 50.0, max = 200.0))\n\n[ Info: \'Reactive Power\' limits defined as nothing     TechThermal:        activepower: 100.0        activepowerlimits: (min = 50.0, max = 200.0)        reactivepower: nothing        reactivepowerlimits: nothing        ramplimits: nothing        timelimits: nothing\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ThermalDispatch",
    "page": "PowerSystems",
    "title": "PowerSystems.ThermalDispatch",
    "category": "type",
    "text": "\" Data Structure for thermal generation technologies.     The data structure contains all the information for technical and economical modeling.     The data fields can be filled using named fields or directly.\n\nExamples\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ThermalGen",
    "page": "PowerSystems",
    "title": "PowerSystems.ThermalGen",
    "category": "type",
    "text": "Abstract struct for thermal generation technologies\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ThermalGenSeason",
    "page": "PowerSystems",
    "title": "PowerSystems.ThermalGenSeason",
    "category": "type",
    "text": "\" Data Structure for thermal generation technologies subjecto to seasonality constraints.     The data structure contains all the information for technical and economical modeling and an extra field for a time series.     The data fields can be filled using named fields or directly.\n\nExamples\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.Transformer2W",
    "page": "PowerSystems",
    "title": "PowerSystems.Transformer2W",
    "category": "type",
    "text": "The 2-W transformer model uses an equivalent circuit assuming the impedance is on the High Voltage Side of the transformer. The model allocates the iron losses and magnetezing suceptance to the primary side\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.VSCDCLine",
    "page": "PowerSystems",
    "title": "PowerSystems.VSCDCLine",
    "category": "type",
    "text": "As implemented in Milano\'s Book Page 397\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.assign_ts_data-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.assign_ts_data",
    "category": "method",
    "text": "Args:     PowerSystems Dictionary     Dictionary of all the data files Returns:     Returns an dictionary with Device name as key and PowerSystems Forecasts     dictionary as values\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_file-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_file",
    "category": "method",
    "text": "parse_file(file; import_all)\n\nParses a Matpower .m file or PTI (PSS(R)E-v33) .raw file into a PowerModels data structure. All fields from PTI files will be imported if import_all is true (Default: false).\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parsestandardfiles-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parsestandardfiles",
    "category": "method",
    "text": "Read in power-system parameters from a Matpower, PTI, or JSON file and do some data checks.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ps_dict2ps_struct-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.ps_dict2ps_struct",
    "category": "method",
    "text": "Takes a PowerSystems dictionary and return an array of PowerSystems struct for Bus, Generator, Branch and load\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.read_data_files-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.read_data_files",
    "category": "method",
    "text": "Read all forecast CSV\'s in the path provided, the struct of the data should follow this format folder : PV             file : DAYAHEAD             file : REALTIME Folder name should be the device type Files should only contain one real-time and day-ahead forecast Args:     files: A string Returns:     A dictionary with the CSV files as dataframes and folder names as keys\n\nTODO : Stochasti/Multiple scenarios\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.update_data!-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.update_data!",
    "category": "method",
    "text": "recursively applies new_data to data, overwriting information\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Exported-1",
    "page": "PowerSystems",
    "title": "Exported",
    "category": "section",
    "text": "Modules = [PowerSystems]\nPrivate = false"
},

{
    "location": "api/PowerSystems/#PowerSystems.conductorless",
    "page": "PowerSystems",
    "title": "PowerSystems.conductorless",
    "category": "constant",
    "text": "feild names that should not be multi-conductor values\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.DataFormatError",
    "page": "PowerSystems",
    "title": "PowerSystems.DataFormatError",
    "category": "type",
    "text": "Thrown upon detection of user data that is not supported.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.GeneratorCostModel",
    "page": "PowerSystems",
    "title": "PowerSystems.GeneratorCostModel",
    "category": "type",
    "text": "From http://www.pserc.cornell.edu/matpower/MATPOWER-manual.pdf Table B-4\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Base.isapprox-Tuple{MultiConductorValue,MultiConductorValue}",
    "page": "PowerSystems",
    "title": "Base.isapprox",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Base.setindex!-Union{Tuple{T}, Tuple{MultiConductorMatrix{T},T,Int64,Int64}} where T",
    "page": "PowerSystems",
    "title": "Base.setindex!",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Base.setindex!-Union{Tuple{T}, Tuple{MultiConductorVector{T},T,Int64}} where T",
    "page": "PowerSystems",
    "title": "Base.setindex!",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._bold-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems._bold",
    "category": "method",
    "text": "Makes a string bold in the terminal\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._calc_max_cost_index-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._calc_max_cost_index",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._check_conductors-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._check_conductors",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._check_cost_function-Tuple{Any,Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems._check_cost_function",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._check_reference_buses-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._check_reference_buses",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._dfs-NTuple{4,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems._dfs",
    "category": "method",
    "text": "performs DFS on a graph\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._float2string-Tuple{AbstractFloat,Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems._float2string",
    "category": "method",
    "text": "converts a float value into a string of fixed precision\n\nsprintf would do the job but this work around is needed because sprintf cannot take format strings during runtime\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._grey-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems._grey",
    "category": "method",
    "text": "Makes a string grey in the terminal, does not seem to work well on Windows terminals more info can be found at https://en.wikipedia.org/wiki/ANSIescapecode\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._iscomponentdict-Tuple{Dict}",
    "page": "PowerSystems",
    "title": "PowerSystems._iscomponentdict",
    "category": "method",
    "text": "Attempts to determine if the given data is a component dictionary\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._make_mixed_units-Tuple{Dict{String,Any},Real}",
    "page": "PowerSystems",
    "title": "PowerSystems._make_mixed_units",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._make_multiconductor-Tuple{Dict{String,Any},Real}",
    "page": "PowerSystems",
    "title": "PowerSystems._make_multiconductor",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._make_per_unit-Tuple{Dict{String,Any},Real}",
    "page": "PowerSystems",
    "title": "PowerSystems._make_per_unit",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._propagate_topology_status-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._propagate_topology_status",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._rescale_cost_model-Tuple{Dict{String,Any},Real}",
    "page": "PowerSystems",
    "title": "PowerSystems._rescale_cost_model",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._select_largest_component-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._select_largest_component",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._showpages-Tuple{Int64,Int64,Array{Int64,N} where N}",
    "page": "PowerSystems",
    "title": "PowerSystems._showpages",
    "category": "method",
    "text": "calculate the paging\n\n> using MarketData\n> AAPL  # this function will return `UnitRange{Int64}[1:9, 10:12]`\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._simplify_pwl_cost",
    "page": "PowerSystems",
    "title": "PowerSystems._simplify_pwl_cost",
    "category": "function",
    "text": "checks the slope of each segment in a pwl function, simplifies the function if the slope changes is below a tolerance\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._standardize_cost_terms-Tuple{Dict{String,Any},Int64,String}",
    "page": "PowerSystems",
    "title": "PowerSystems._standardize_cost_terms",
    "category": "method",
    "text": "ensures all polynomial costs functions have at exactly comp_order terms\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._update_data!-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems._update_data!",
    "category": "method",
    "text": "recursive call of updatedata\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._value2string-Tuple{Any,Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems._value2string",
    "category": "method",
    "text": "converts any value to a string, summarizes arrays and dicts\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems._value2string-Tuple{MultiConductorValue,Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems._value2string",
    "category": "method",
    "text": "converts a MultiConductorValue value to a string in summary\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.add_dcline_costs-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.add_dcline_costs",
    "category": "method",
    "text": "adds dcline costs, if gen costs exist\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.add_line_delimiter-Tuple{AbstractString,Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.add_line_delimiter",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.add_section_data!-Tuple{Dict,Dict,AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.add_section_data!",
    "category": "method",
    "text": "add_section_data!(pti_data, section_data, section)\n\nAdds section_data::Dict, which contains all parsed elements of a PTI file section given by section, into the parent pti_data::Dict\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.add_time_series-Tuple{Dict{String,Any},DataFrames.DataFrame}",
    "page": "PowerSystems",
    "title": "PowerSystems.add_time_series",
    "category": "method",
    "text": "Arg:     Device dictionary - Generators     Dataframe contains device Realtime/Forecast TimeSeries Returns:     Device dictionary with timeseries added\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.add_time_series_load-Tuple{Dict{String,Any},DataFrames.DataFrame}",
    "page": "PowerSystems",
    "title": "PowerSystems.add_time_series_load",
    "category": "method",
    "text": "Arg:     Load dictionary     LoadZones dictionary     Dataframe contains device Realtime/Forecast TimeSeries Returns:     Device dictionary with timeseries added\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.apply_func-Tuple{Dict{String,Any},String,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.apply_func",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.arrays_to_dicts!-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.arrays_to_dicts!",
    "category": "method",
    "text": "turns top level arrays into dicts\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.branch_csv_parser",
    "page": "PowerSystems",
    "title": "PowerSystems.branch_csv_parser",
    "category": "function",
    "text": "Args:     A DataFrame with the same column names as in RTS_GMLC branch.csv file     Parsed Bus PowerSystems dictionary Returns:     A Nested Dictionary with keys as branch types/names and values as     line/transformer data dictionary with same keys as the device struct\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.bus_csv_parser",
    "page": "PowerSystems",
    "title": "PowerSystems.bus_csv_parser",
    "category": "function",
    "text": "Args:     A DataFrame with the same column names as in RTS_GMLC bus.csv file\n\n\"Bus ID\" \"Bus Name\" \"BaseKV\" \"Bus Type\" \"MW Load\" \"MVAR Load\" \"V Mag\" \"V\nAngle\" \"MW Shunt G\" \"MVAR Shunt B\" \"Area\"\n\nReturns:     A Nested Dictionary with keys as Bus number and values as bus data     dictionary with same keys as the device struct\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.bus_gen_lookup-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.bus_gen_lookup",
    "category": "method",
    "text": "builds a lookup list of what generators are connected to a given bus\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.bus_load_lookup-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.bus_load_lookup",
    "category": "method",
    "text": "builds a lookup list of what loads are connected to a given bus\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.bus_shunt_lookup-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.bus_shunt_lookup",
    "category": "method",
    "text": "builds a lookup list of what shunts are connected to a given bus\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.calc_branch_t-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.calc_branch_t",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.calc_branch_y-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.calc_branch_y",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.calc_max_cost_index-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.calc_max_cost_index",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.calc_theta_delta_bounds-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.calc_theta_delta_bounds",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_branch_directions-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_branch_directions",
    "category": "method",
    "text": "checks that all parallel branches have the same orientation\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_branch_loops-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_branch_loops",
    "category": "method",
    "text": "checks that all branches connect two distinct buses\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_bus_types-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_bus_types",
    "category": "method",
    "text": "checks bus types are consistent with generator connections, if not, fixes them\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_component_refrence_bus-Tuple{Any,Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_component_refrence_bus",
    "category": "method",
    "text": "checks that a connected component has a reference bus, if not, adds one\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_conductors-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_conductors",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_connectivity-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_connectivity",
    "category": "method",
    "text": "checks that all buses are unique and other components link to valid buses\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_cost_functions-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_cost_functions",
    "category": "method",
    "text": "throws warnings if cost functions are malformed\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_current_limits-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_current_limits",
    "category": "method",
    "text": "checks that each branch has a reasonable current rating-a, if not computes one\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_dcline_limits-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_dcline_limits",
    "category": "method",
    "text": "checks that parameters for dc lines are reasonable\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_keys-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_keys",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_network_data-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_network_data",
    "category": "method",
    "text": "Runs various data quality checks on a PowerModels data dictionary. Applies modifications in some cases.  Reports modified component ids.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_reference_buses-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_reference_buses",
    "category": "method",
    "text": "checks that each connected components has a reference bus, if not, adds one\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_storage_parameters-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_storage_parameters",
    "category": "method",
    "text": "checks that each storage unit has a reasonable parameters\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_thermal_limits-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_thermal_limits",
    "category": "method",
    "text": "checks that each branch has a reasonable thermal rating-a, if not computes one\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_transformer_parameters-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_transformer_parameters",
    "category": "method",
    "text": "checks that each branch has a reasonable transformer parameters\n\nthis is important because setting tap == 0.0 leads to NaN computations, which are hard to debug\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_type-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_type",
    "category": "method",
    "text": "Checks if the given value is of a given type, if not tries to make it that type\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_voltage_angle_differences",
    "page": "PowerSystems",
    "title": "PowerSystems.check_voltage_angle_differences",
    "category": "function",
    "text": "checks that voltage angle differences are within 90 deg., if not tightens\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.check_voltage_setpoints-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.check_voltage_setpoints",
    "category": "method",
    "text": "throws warnings if generator and dc line voltage setpoints are not consistent with the bus voltage setpoint\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.compare_dict-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.compare_dict",
    "category": "method",
    "text": "tests if two dicts are equal, up to floating point precision\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.compare_numbers-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.compare_numbers",
    "category": "method",
    "text": "tests if two numbers are equal, up to floating point precision\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.component_table-Tuple{Dict{String,Any},String,Array{String,1}}",
    "page": "PowerSystems",
    "title": "PowerSystems.component_table",
    "category": "method",
    "text": "builds a table of component data\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.connected_components-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.connected_components",
    "category": "method",
    "text": "computes the connected components of the network graph returns a set of sets of bus ids, each set is a connected component\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.create_starbus_from_transformer-Tuple{Dict,Dict}",
    "page": "PowerSystems",
    "title": "PowerSystems.create_starbus_from_transformer",
    "category": "method",
    "text": "create_starbus(pm_data, transformer)\n\nCreates a starbus from a given three-winding transformer. \"sourceid\" is given by `[\"busi\", \"name\", \"I\", \"J\", \"K\", \"CKT\"]` where \"bus_i\" and \"name\" are the modified names for the starbus, and \"I\", \"J\", \"K\" and \"CKT\" come from the originating transformer, in the PSS(R)E transformer specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.csv2ps_dict-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.csv2ps_dict",
    "category": "method",
    "text": "Args:     Dict with all the System data from CSV files ... see read_csv_data()\' Returns:     A Power Systems Nested dictionary with keys as devices and values as data     dictionary necessary to construct the device structs     PS dictionary:         \"Bus\" => Dict(bus_no => Dict(\"name\" =>                                      \"number\" => ... ) )         \"Generator\" => Dict( \"Thermal\" => Dict( \"name\" =>                                                 \"tech\" => ...)                              \"Hydro\"  => ..                              \"Renewable\" => .. )         \"Branch\" => ...         \"Load\" => ...         \"LoadZones\" => ...         \"BaseKV\" => ..         ...\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.csv2ps_dict-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.csv2ps_dict",
    "category": "method",
    "text": "Args:     Path to folder with all the System data CSV\'s files Returns:     A Power Systems Nested dictionary with keys as devices and values as data     dictionary necessary to construct the device structs     PS dictionary:         \"Bus\" => Dict(bus_no => Dict(\"name\" =>                                      \"number\" => ... ) )         \"Generator\" => Dict( \"Thermal\" => Dict( \"name\" =>                                                 \"tech\" => ...)                              \"Hydro\"  => ..                              \"Renewable\" => .. )         \"Branch\" => ...         \"Load\" => ...         \"LoadZones\" => ...         \"BaseKV\" => ..         ...\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.dc_branch_csv_parser",
    "page": "PowerSystems",
    "title": "PowerSystems.dc_branch_csv_parser",
    "category": "function",
    "text": "Args:     A DataFrame with the same column names as in RTSGMLC dcbranch.csv file     Parsed Bus PowerSystems dictionary Returns:     A Nested Dictionary with keys as dcbranch types/names and values as     dcbranch data dictionary with same keys as the device struct\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.export_cost_data-Tuple{IO,Dict{Int64,Dict},String}",
    "page": "PowerSystems",
    "title": "PowerSystems.export_cost_data",
    "category": "method",
    "text": "Export cost data\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.export_extra_data",
    "page": "PowerSystems",
    "title": "PowerSystems.export_extra_data",
    "category": "function",
    "text": "Export fields of a component type\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.export_matpower-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.export_matpower",
    "category": "method",
    "text": "Export power network data in the matpower format\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.export_matpower-Tuple{IO,Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.export_matpower",
    "category": "method",
    "text": "Export power network data in the matpower format\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.extract_matlab_assignment-Tuple{AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.extract_matlab_assignment",
    "category": "method",
    "text": "breaks up matlab strings of the form \'name = value;\'\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.find_bus-Tuple{Dict{Int64,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.find_bus",
    "category": "method",
    "text": "Finds the bus dictionary where a Generator/Load is located or the from & to bus for a line/transformer\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.find_max_bus_id-Tuple{Dict}",
    "page": "PowerSystems",
    "title": "PowerSystems.find_max_bus_id",
    "category": "method",
    "text": "find_max_bus_id(pm_data)\n\nReturns the maximum bus id in pm_data\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.gen_csv_parser",
    "page": "PowerSystems",
    "title": "PowerSystems.gen_csv_parser",
    "category": "function",
    "text": "Args:     A DataFrame with the same column names as in RTS_GMLC gen.csv file     Parsed Bus PowerSystems dictionary Returns:     A Nested Dictionary with keys as generator types/names and values as     generator data dictionary with same keys as the device struct\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_bus_value-Tuple{Any,Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.get_bus_value",
    "category": "method",
    "text": "get_bus_value(bus_i, field, pm_data)\n\nReturns the value of field of bus_i from the PowerModels data. Requires \"bus\" Dict to already be populated.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_default",
    "page": "PowerSystems",
    "title": "PowerSystems.get_default",
    "category": "function",
    "text": "Get a default value for dict entry \n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_line_elements-Tuple{AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.get_line_elements",
    "category": "method",
    "text": "get_line_elements(line)\n\nUses regular expressions to extract all separate data elements from a line of a PTI file and populate them into an Array{String}. Comments, typically indicated at the end of a line with a \'/\' character, are also extracted separately, and Array{Array{String}, String} is returned.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_pti_dtypes-Tuple{AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.get_pti_dtypes",
    "category": "method",
    "text": "get_pti_dtypes(field_name)\n\nReturns OrderedDict of data types for PTI file section given by field_name, as enumerated by PSS/E Program Operation Manual\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.get_pti_sections-Tuple{}",
    "page": "PowerSystems",
    "title": "PowerSystems.get_pti_sections",
    "category": "method",
    "text": "get_pti_sections()\n\nReturns Array of the names of the sections, in the order that they appear in a PTI file, v33+\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.im_replicate-Tuple{Dict{String,Any},Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems.im_replicate",
    "category": "method",
    "text": "Transforms a single network into a multinetwork with several deepcopies of the original network\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.import_remaining!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.import_remaining!",
    "category": "method",
    "text": "Imports remaining keys from data_in into data_out, excluding keys in exclude\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.init_bus!-Tuple{Dict{String,Any},Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems.init_bus!",
    "category": "method",
    "text": "init_bus!(bus, id)\n\nInitializes a bus of id id with default values given in the PSS(R)E specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.ismultinetwork-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.ismultinetwork",
    "category": "method",
    "text": "checks if a given network data is a multinetwork\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.load_csv_parser",
    "page": "PowerSystems",
    "title": "PowerSystems.load_csv_parser",
    "category": "function",
    "text": "Args:     A DataFrame with the same column names as in RTS_GMLC bus.csv file     Parsed Bus entry of PowerSystems dictionary     Parsed LoadZone entry of PowerSystems dictionary Optional Args:     DataFrame of LoadZone timeseries data     Dict of bus column names     Dict of load LoadZone timeseries column names Returns:     A Nested Dictionary with keys as load names and values as load data     dictionary with same keys as the device struct\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.load_csv_parser",
    "page": "PowerSystems",
    "title": "PowerSystems.load_csv_parser",
    "category": "function",
    "text": "Args:     A DataFrame with the same column names as in RTS_GMLC bus.csv file     Parsed Bus entry of PowerSystems dictionary Optional Args:     DataFrame of LoadZone timeseries data     Dict of bus column names     Dict of load LoadZone timeseries column names Returns:     A Nested Dictionary with keys as load names and values as load data     dictionary with same keys as the device struct\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.loadzone_csv_parser",
    "page": "PowerSystems",
    "title": "PowerSystems.loadzone_csv_parser",
    "category": "function",
    "text": "Args:     A DataFrame with the same column names as in RTS_GMLC bus.csv file     Parsed Bus PowerSystems dictionary Returns:     A Nested Dictionary with keys as loadzone names and values as loadzone data     dictionary with same keys as the device struct\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_bus-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_bus",
    "category": "method",
    "text": "Creates a PowerSystems.Bus from a PowerSystems bus dictionary\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_forecast_array-Tuple{Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_forecast_array",
    "category": "method",
    "text": "Args:     A PowerSystems forecast dictionary Returns:     A PowerSystems forecast stuct array\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_forecast_dict-Tuple{Dict{String,Any},Dates.Period,Int64,Array{ElectricLoad,1},Array{PowerSystems.PowerSystemDevice,1}}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_forecast_dict",
    "category": "method",
    "text": "Args:     Dictionary of all the data files     Length of the forecast - Week()/Dates.Day()/Dates.Hour()     Forecast horizon in hours - Int64     Array of PowerSystems devices in the systems- Loads     Array of PowerSystems LoadZones\n\nReturns:     Returns an dictionary with Device name as key and PowerSystems Forecasts     dictionary as values\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_forecast_dict-Tuple{Dict{String,Any},Dates.Period,Int64,Array{ElectricLoad,1}}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_forecast_dict",
    "category": "method",
    "text": "Args:     Dictionary of all the data files     Length of the forecast - Week()/Dates.Day()/Dates.Hour()     Forecast horizon in hours - Int64     Array of PowerSystems devices in the systems- Loads Returns:     Returns an dictionary with Device name as key and PowerSystems Forecasts     dictionary as values\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_forecast_dict-Tuple{Dict{String,Any},Dates.Period,Int64,Array{Generator,1}}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_forecast_dict",
    "category": "method",
    "text": "Args:     Dictionary of all the data files     Length of the forecast - Week()/Dates.Day()/Dates.Hour()     Forecast horizon in hours - Int64     Array of PowerSystems devices in the systems - Renewable Generators and     Loads Returns:     Returns an dictionary with Device name as key and PowerSystems Forecasts     dictionary as values\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_mixed_units-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_mixed_units",
    "category": "method",
    "text": "Transforms network data into mixed-units (inverse of per-unit)\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_multiconductor-Tuple{Dict{String,Any},Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_multiconductor",
    "category": "method",
    "text": "Transforms single-conductor network data into multi-conductor data\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.make_per_unit-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.make_per_unit",
    "category": "method",
    "text": "Transforms network data into per-unit\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.matpower_to_powermodels-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.matpower_to_powermodels",
    "category": "method",
    "text": "Converts a Matpower dict into a PowerModels dict\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.merge_bus_name_data-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.merge_bus_name_data",
    "category": "method",
    "text": "merges bus name data into buses, if names exist\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.merge_generator_cost_data-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.merge_generator_cost_data",
    "category": "method",
    "text": "merges generator cost functions into generator data, if costs exist\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.merge_generic_data-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.merge_generic_data",
    "category": "method",
    "text": "merges Matpower tables based on the table extension syntax\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.mp2pm_branch-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.mp2pm_branch",
    "category": "method",
    "text": "sets all branch transformer taps to 1.0, to simplify branch models\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.mp2pm_dcline-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.mp2pm_dcline",
    "category": "method",
    "text": "adds pmin and pmax values at to and from buses\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.mp_cost_data-Tuple{Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.mp_cost_data",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_json-Tuple{IO}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_json",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_json-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_json",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_line_element!-Tuple{Dict,Array,AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_line_element!",
    "category": "method",
    "text": "parse_line_element!(data, elements, section)\n\nParses a single \"line\" of data elements from a PTI file, as given by elements which is an array of the line, typically split at ,. Elements are parsed into data types given by section and saved into data::Dict\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matlab_cells-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matlab_cells",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matlab_data-NTuple{4,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matlab_data",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matlab_matrix-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matlab_matrix",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matpower-Tuple{Union{IO, String}}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matpower",
    "category": "method",
    "text": "Parses the matpwer data from either a filename or an IO object\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matpower_file-Tuple{IO}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matpower_file",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matpower_file-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matpower_file",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_matpower_string-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_matpower_string",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_psse-Tuple{Dict}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_psse",
    "category": "method",
    "text": "parse_psse(pti_data)\n\nConverts PSS(R)E-style data parsed from a PTI raw file, passed by pti_data into a format suitable for use internally in PowerModels. Imports all remaining data from the PTI file if import_all is true (Default: false).\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_psse-Tuple{IO}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_psse",
    "category": "method",
    "text": "Parses directly from iostream\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_psse-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_psse",
    "category": "method",
    "text": "Parses directly from file\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_pti-Tuple{IO}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_pti",
    "category": "method",
    "text": "parse_pti(io::IO)\n\nReads PTI data in io::IO, returning a Dict of the data parsed into the proper types.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_pti-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_pti",
    "category": "method",
    "text": "parse_pti(filename::String)\n\nOpen PTI raw file given by filename, returning a Dict of the data parsed into the proper types.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.parse_pti_data-Tuple{IO,Array}",
    "page": "PowerSystems",
    "title": "PowerSystems.parse_pti_data",
    "category": "method",
    "text": "parse_pti_data(data_string, sections)\n\nParse a PTI raw file into a Dict, given the data_string of the file and a list of the sections in the PTI file (typically given by default by get_pti_sections().\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.pm2ps_dict-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.pm2ps_dict",
    "category": "method",
    "text": "Takes a dictionary parsed by PowerModels and returns a PowerSystems dictionary.  Currently Supports MATPOWER and PSSE data files parsed by PowerModels\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.print_summary-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.print_summary",
    "category": "method",
    "text": "prints the text summary for a data dictionary to stdout\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.print_summary-Tuple{Union{Dict{String,Any}, String}}",
    "page": "PowerSystems",
    "title": "PowerSystems.print_summary",
    "category": "method",
    "text": "prints the text summary for a data file or dictionary to stdout\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.propagate_topology_status-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.propagate_topology_status",
    "category": "method",
    "text": "finds active network buses and branches that are not necessary for the computation and sets their status to off.\n\nWorks on a PowerModels data dict, so that a it can be used without a GenericPowerModel object\n\nWarning: this implementation has quadratic complexity, in the worst case\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_branch!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_branch!",
    "category": "method",
    "text": "psse2pm_branch!(pm_data, pti_data)\n\nParses PSS(R)E-style Branch data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"J\", \"CKT\"] in PSS(R)E Branch specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_bus!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_bus!",
    "category": "method",
    "text": "psse2pm_bus!(pm_data, pti_data)\n\nParses PSS(R)E-style Bus data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"NAME\"] in PSS(R)E Bus specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_dcline!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_dcline!",
    "category": "method",
    "text": "psse2pm_dcline!(pm_data, pti_data)\n\nParses PSS(R)E-style Two-Terminal and VSC DC Lines data into a PowerModels compatible Dict structure by first converting them to a simple DC Line Model. For Two-Terminal DC lines, \"sourceid\" is given by [\"IPR\", \"IPI\", \"NAME\"] in the PSS(R)E Two-Terminal DC specification. For Voltage Source Converters, \"sourceid\" is given by [\"IBUS1\", \"IBUS2\", \"NAME\"], where \"IBUS1\" is \"IBUS\" of the first converter bus, and \"IBUS2\" is the \"IBUS\" of the second converter bus, in the PSS(R)E Voltage Source Converter specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_generator!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_generator!",
    "category": "method",
    "text": "psse2pm_generator!(pm_data, pti_data)\n\nParses PSS(R)E-style Generator data in a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] in PSS(R)E Generator specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_load!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_load!",
    "category": "method",
    "text": "psse2pm_load!(pm_data, pti_data)\n\nParses PSS(R)E-style Load data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] in the PSS(R)E Load specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_shunt!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_shunt!",
    "category": "method",
    "text": "psse2pm_shunt!(pm_data, pti_data)\n\nParses PSS(R)E-style Fixed and Switched Shunt data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] for Fixed Shunts, and [\"I\", \"SWREM\"] for Switched Shunts, as given by the PSS(R)E Fixed and Switched Shunts specifications.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.psse2pm_transformer!-Tuple{Dict,Dict,Bool}",
    "page": "PowerSystems",
    "title": "PowerSystems.psse2pm_transformer!",
    "category": "method",
    "text": "psse2pm_transformer!(pm_data, pti_data)\n\nParses PSS(R)E-style Transformer data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"J\", \"K\", \"CKT\", \"winding\"], where \"winding\" is 0 if transformer is two-winding, and 1, 2, or 3 for three-winding, and the remaining keys are defined in the PSS(R)E Transformer specification.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.read_csv_data-Tuple{String}",
    "page": "PowerSystems",
    "title": "PowerSystems.read_csv_data",
    "category": "method",
    "text": "Reads in all the data stored in csv files The general format for data is     folder:         gen.csv         branch.csv         bus.csv         ..         load.csv Args:     Path to folder with all the System data CSV files\n\nReturns:     Nested Data dictionary with key values as folder/file names and dataframes     as values\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.read_datetime-Tuple{Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.read_datetime",
    "category": "method",
    "text": "Arg:     Dataframes which includes a timerseries columns of either:         Year, Month, Day, Period       or         DateTime       or         nothing (creates a today referenced DateTime Column) Returns:     Dataframe with a DateTime columns\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.remove_missing-Tuple{Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.remove_missing",
    "category": "method",
    "text": "Arg:     Any DataFrame with Missing values / \"NA\" strings that are either created by     readtable() or CSV.read() Returns:     DataFrame with missing values replaced by 0\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.replicate-Tuple{Dict{String,Any},Int64}",
    "page": "PowerSystems",
    "title": "PowerSystems.replicate",
    "category": "method",
    "text": "calls the replicate function with PowerModels\' global keys\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.row_to_dict-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.row_to_dict",
    "category": "method",
    "text": "takes a row from a matrix and assigns the values names\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.row_to_typed_dict-Tuple{Any,Any}",
    "page": "PowerSystems",
    "title": "PowerSystems.row_to_typed_dict",
    "category": "method",
    "text": "takes a row from a matrix and assigns the values names and types\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.select_largest_component-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.select_largest_component",
    "category": "method",
    "text": "determines the largest connected component of the network and turns everything else off\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.services_csv_parser",
    "page": "PowerSystems",
    "title": "PowerSystems.services_csv_parser",
    "category": "function",
    "text": "Args:     A DataFrame with the same column names as in RTSGMLC reserves.csv file     A DataFrame with the same column names as in RTSGMLC gen.csv file     A DataFrame with the same column names as in RTS_GMLC bus.csv file Returns:     A Nested Dictionary with keys as loadzone names and values as loadzone data     dictionary with same keys as the device struct\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.simplify_cost_terms-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.simplify_cost_terms",
    "category": "method",
    "text": "trims zeros from higher order cost terms\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.split_line-Tuple{AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.split_line",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.split_loads_shunts-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.split_loads_shunts",
    "category": "method",
    "text": "split_loads_shunts(data)\n\nSeperates Loads and Shunts in data under separate \"load\" and \"shunt\" keys in the PowerModels data format. Includes references to originating bus via \"loadbus\" and \"shuntbus\" keys, respectively.\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.standardize_cost_terms-Tuple{Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.standardize_cost_terms",
    "category": "method",
    "text": "ensures all polynomial costs functions have the same number of terms\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.summary-Tuple{IO,Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.summary",
    "category": "method",
    "text": "prints the text summary for a data dictionary to IO\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.summary-Tuple{IO,String}",
    "page": "PowerSystems",
    "title": "PowerSystems.summary",
    "category": "method",
    "text": "prints the text summary for a data file to IO\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.type_array-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:AbstractString",
    "page": "PowerSystems",
    "title": "PowerSystems.type_array",
    "category": "method",
    "text": "Attempts to determine the type of an array of strings extracted from a matlab file\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.type_value-Tuple{AbstractString}",
    "page": "PowerSystems",
    "title": "PowerSystems.type_value",
    "category": "method",
    "text": "Attempts to determine the type of a string extracted from a matlab file\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#PowerSystems.update_data-Tuple{Dict{String,Any},Dict{String,Any}}",
    "page": "PowerSystems",
    "title": "PowerSystems.update_data",
    "category": "method",
    "text": "recursively applies new_data to data, overwriting information\n\n\n\n\n\n"
},

{
    "location": "api/PowerSystems/#Internal-1",
    "page": "PowerSystems",
    "title": "Internal",
    "category": "section",
    "text": "Modules = [PowerSystems]\nPublic = false"
},

]}
